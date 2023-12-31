package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;import com.app.model.Rating;
import com.app.model.Ratings;

@Repository
public interface RatingRepo extends JpaRepository<Ratings, Integer>{

}
