package com.example.invoicegenerator.Controller;

import com.example.invoicegenerator.Entity.Invoice;
import com.example.invoicegenerator.Service.EmailService;
import com.example.invoicegenerator.Service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin()
public class InvoiceController {
    private final InvoiceService invoiceService;
    private final EmailService emailService;

    @PostMapping()
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
        return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }
    @GetMapping()
    public ResponseEntity<List<Invoice>> fetchInvoices() {
        return ResponseEntity.ok(invoiceService.fetchInvoices());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeInvoice(@PathVariable String id){
        invoiceService.removeInvoice(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/sendInvoice")
    public ResponseEntity<?> sendInvoice(@RequestParam("file") MultipartFile file,
                                         @RequestParam("email") String customerEmail) {
        try {
            System.out.println("Received email: " + customerEmail);  // debug
            System.out.println("File size: " + file.getSize());       // debug

            emailService.sendInvoiceEmail(customerEmail, file);
            return ResponseEntity.ok().body("Invoice sent successfully");
        } catch (Exception e) {
            e.printStackTrace(); // helpful for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send invoice");
        }
    }
}