package com.generation.burguer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	 @Column(name = "user_pass", nullable = false)
	private String password;
	 
	 @Column(name = "user_email", nullable = false)
	private String email;
	 
	 @Column(name = "user_phone", nullable = false)
	private String phone;
	 
	 @Column(name = "user_name", nullable = false)
	private String name;
	 
	 @Column(name = "user_type", nullable = false)
	private String type;

	public Usuario(Long id, String password, String email, String phone, String name, String type) {
		super();
		this.id = id;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.name = name;
		this.type = type;
	}//const
	public Usuario() {
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Usuario [id=" + id + ", password=" + password + ", email=" + email + ", phone=" + phone + ", name="
				+ name + ", type=" + type + "]";
	}
	
	 
	 
}

