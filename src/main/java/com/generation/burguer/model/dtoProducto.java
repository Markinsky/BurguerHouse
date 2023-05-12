package com.generation.burguer.model;


public class dtoProducto {
	
	 private Long id;
	 private String nombre;
	 private String descripcion;
	 private double precio;
	 private String imagen;
	 
	 private Long cate_id;
	 private String cate_nombre;
	public dtoProducto(Long id, String nombre, String descripcion, double precio, String imagen, Long cate_id,
			String cate_nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
		this.imagen = imagen;
		this.cate_id = cate_id;
		this.cate_nombre = cate_nombre;
	}
	 
	 public dtoProducto() {
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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public Long getCate_id() {
		return cate_id;
	}

	public void setCate_id(Long cate_id) {
		this.cate_id = cate_id;
	}

	public String getCate_nombre() {
		return cate_nombre;
	}

	public void setCate_nombre(String cate_nombre) {
		this.cate_nombre = cate_nombre;
	}

	@Override
	public String toString() {
		return "dtoProducto [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio
				+ ", imagen=" + imagen + ", cate_id=" + cate_id + ", cate_nombre=" + cate_nombre + "]";
	}
	 
}
