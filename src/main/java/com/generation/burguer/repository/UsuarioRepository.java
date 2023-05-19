package com.generation.burguer.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.generation.burguer.model.Usuario;
import com.generation.burguer.model.dtoProducto;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	Optional <Usuario> findByEmail(String email);
	
	@Query ("SELECT email, name, password, phone, type FROM Usuario WHERE email = :Email AND password = :Pass")
	Optional <Usuario> findByLogin (@Param("Email") String Email,
    		@Param("Pass") String Pass);
}
