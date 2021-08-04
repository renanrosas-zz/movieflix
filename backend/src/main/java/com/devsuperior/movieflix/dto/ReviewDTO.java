package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Texto obrigatótio para avaliação")
	private String text;

	private UserDTO user;
	private Long movieId;
	
	public ReviewDTO() {
	}
	
	public ReviewDTO(Long id, String text, UserDTO user, Long movieId) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.user = user;
	}



	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		user = (entity.getUser() != null) ? new UserDTO(entity.getUser()) : null ;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

}
