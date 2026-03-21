package com.example.invoicegenerator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {
    "MAIL_PASSWORD=mock_test_password",
    "CLERK_WEBHOOK_SECRET=mock_test_secret"
})
class InvoiceGeneratorApplicationTests {

    @Test
    void contextLoads() {
    }

}
