package com.example.invoicegenerator.Controller;

import com.example.invoicegenerator.Entity.User;
import com.example.invoicegenerator.Service.UserService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/webhooks")
@RequiredArgsConstructor
public class ClerkWebHookController {

    @Value("${clerk.webhook.secret}")
    private String webHookSecret;

    private final UserService userService;

    @PostMapping("/clerk")
    public ResponseEntity<?> handleClerkWebhook(@RequestHeader("svix-id") String svixId,
                                                @RequestHeader("svix-timestamp") String svixTimestamp,
                                                @RequestHeader("svix-signature") String svixSignature,
                                                @RequestBody String payload) {
        try {
            System.out.println("🔔 Webhook received.");
            System.out.println("Payload: " + payload);

            verifyWebHookSignature(svixId, svixTimestamp, svixSignature, payload);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(payload);

            String eventType = rootNode.path("type").asText();
            System.out.println("Event type: " + eventType);

            JsonNode data = rootNode.path("data");

            switch (eventType) {
                case "user.created":
                    handleUserCreated(data);
                    break;
                case "user.updated":
                    handleUserUpdated(data);
                    break;
                case "user.deleted":
                    handleUserDeleted(data);
                    break;
                default:
                    System.out.println("⚠️ Unrecognized event type: " + eventType);
            }

            return ResponseEntity.ok("Webhook processed successfully");
        } catch (Exception e) {
            System.out.println("❌ Error processing webhook: " + e.getMessage());
            return ResponseEntity.badRequest().body("Invalid signature or error: " + e.getMessage());
        }
    }

    private void handleUserCreated(JsonNode data) {
        String clerkId = data.path("id").asText();
        String email = data.path("email_addresses").get(0).path("email_address").asText();
        String firstName = data.path("first_name").asText();
        String lastName = data.path("last_name").asText();
        String imageUrl = data.path("image_url").asText();

        System.out.println("👤 Creating user:");
        System.out.println("Clerk ID: " + clerkId);
        System.out.println("Email: " + email);
        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);
        System.out.println("Image URL: " + imageUrl);

        User newUser = User.builder()
                .clerkId(clerkId)
                .email(email)
                .firstName(firstName)
                .lastName(lastName)
                .photoUrl(imageUrl)
                .build();

        userService.saveOrUpdate(newUser);
    }

    private void handleUserUpdated(JsonNode data) {
        String clerkId = data.path("id").asText();
        System.out.println("✏️ Updating user: " + clerkId);

        User existingUser = userService.getAccountByClerkId(clerkId);
        if (existingUser == null) {
            System.out.println("⚠️ User not found for update: " + clerkId);
            return;
        }

        String email = data.path("email_addresses").get(0).path("email_address").asText();
        String firstName = data.path("first_name").asText();
        String lastName = data.path("last_name").asText();
        String imageUrl = data.path("image_url").asText();

        System.out.println("Updated Email: " + email);
        System.out.println("Updated First Name: " + firstName);
        System.out.println("Updated Last Name: " + lastName);
        System.out.println("Updated Image URL: " + imageUrl);

        existingUser.setEmail(email);
        existingUser.setFirstName(firstName);
        existingUser.setLastName(lastName);
        existingUser.setPhotoUrl(imageUrl);

        userService.saveOrUpdate(existingUser);
    }

    private void handleUserDeleted(JsonNode data) {
        String clerkId = data.path("id").asText();
        System.out.println("🗑️ Deleting user: " + clerkId);
        userService.deleteAccount(clerkId);
    }

    private boolean verifyWebHookSignature(String svixId, String svixTimestamp, String svixSignature, String payload) {
        // Stub: Add signature verification logic if needed
        System.out.println("🔐 Webhook signature accepted (mocked)");
        return true;
    }
}