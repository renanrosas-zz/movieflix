package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService  {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Pageable pageable){
		return repository.findAll(pageable).map(x -> new MovieDTO(x));	
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findMovieByGenre(Long genreId, Pageable pageable){
		return repository.findMovieByGenre(genreId, pageable)
				.map(x -> new MovieDTO(x));
	}
	
	@Transactional(readOnly = true)
	public Page<ReviewDTO> findMovieReviews(Long movieId, Pageable pageable){
		return repository.findMovieReviews(movieId, pageable)
				.map(x -> new ReviewDTO(x));
	}
}