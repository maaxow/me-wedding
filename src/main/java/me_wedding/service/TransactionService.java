package me_wedding.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import me_wedding.model.Transaction;
import me_wedding.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Inject
	public TransactionRepository transactionRepository;
	
	public Double getTotalAmount() {
		List<Transaction> all = transactionRepository.findAll();
		Double amount = 0.0;
		
		for(Transaction tr : all) {
			amount += tr.getAmount();
		}
		
		return amount;
	}
	
	public List<Transaction> getAll(){
		return transactionRepository.findAll();
	}
	public Transaction findByName(String name){
		return transactionRepository.findByName(name);
	}
	
	public void add(String name, Double amount) {
		
	}
}
