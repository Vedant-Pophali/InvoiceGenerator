package com.example.invoicegenerator.Repository;

import com.example.invoicegenerator.Entity.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InvoiceRepository extends MongoRepository<Invoice, String>{
}