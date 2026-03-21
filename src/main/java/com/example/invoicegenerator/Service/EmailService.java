package com.example.invoicegenerator.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    public void sendInvoiceEmail(String toEmail, MultipartFile file) throws MessagingException, IOException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(fromEmail);
        helper.setTo(toEmail); // Corrected method
        helper.setSubject("Invoice");
        helper.setText("Invoice has been generated successfully \n\nThanks :)", true);
        String fileName = "invoice_"+System.currentTimeMillis()+".pdf";
        helper.addAttachment(fileName,new ByteArrayResource(file.getBytes()));

        javaMailSender.send(message);
    }
}