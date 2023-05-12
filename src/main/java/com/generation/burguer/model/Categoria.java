package com.generation.burguer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categoria")
public class Categoria {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "cate_id", unique = true, nullable = false)
		 private Long id;
		
		 @Column(name = "cate_nombre", nullable = false)
		 private String nombre;

		public Categoria(Long id, String nombre) {
			super();
			this.id = id;
			this.nombre = nombre;
		}
public Categoria() {
	// TODO Auto-generated constructor stub
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
@Override
public String toString() {
	return "Categoria [id=" + id + ", nombre=" + nombre + "]";
}


}
