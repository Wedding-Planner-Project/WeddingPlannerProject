package com.app.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="rating_tbl")
public class Ratings extends BaseEntity{
	@OneToOne
	@JoinColumn(name="order_id")
	private Order order;
	@Enumerated(EnumType.ORDINAL)
	private Rating rating;
}
