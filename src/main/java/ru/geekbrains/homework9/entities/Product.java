package ru.geekbrains.homework9.entities;

import lombok.*;
import ru.geekbrains.homework9.dto.ProductDto;

import javax.persistence.*;

@ToString
@Getter
@Setter
@Entity
@Table(name = "products")
@NoArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "title", length = 250, nullable = false, unique = false)
	private String title;

	@Column(name = "cost", nullable = false, unique = false)
	private int cost;

	public Product(ProductDto productDto) {
		id = productDto.getId();
		title = productDto.getTitle();
		cost = productDto.getCost();
	}


}
