package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	@Query("SELECT obj FROM Review obj WHERE obj.movie.id = :movieId")
	Page<Review> findMovieReviews(Long movieId, Pageable pageable);
	
	@Query("SELECT obj FROM Movie obj WHERE obj.genre.id = :genreId ORDER BY obj.title")
	Page<Movie> findMovieByGenre(Long genreId, Pageable pageable);
	
}
