package me_wedding.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import me_wedding.model.Message;
import me_wedding.repository.MessageRepository;

@Service
public class MessageService {
	
	@Inject
	public MessageRepository messageRepository;
	
	public List<Message> getAll(){
		return messageRepository.findAll();
	}
	
	public List<Message> filterAnonymous(List<Message> messages){
		// create a copy
		List<Message> messagesFiltered = new ArrayList<Message>(messages.size());
		
		for(Message message : messages) {
			if(message.getIsAnonymous()) {
				message.setSender("Anonyme");
			}
			messagesFiltered.add(message);
		}
		return messagesFiltered;
	}
}
