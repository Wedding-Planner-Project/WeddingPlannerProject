package com.app.customexceptions;

//EmailDoesntExistException.java
@SuppressWarnings("serial")
public class EmailDoesntExistException extends RuntimeException {
 public EmailDoesntExistException(String message) {
     super(message);
 }
}

