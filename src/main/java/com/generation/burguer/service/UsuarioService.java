package com.generation.burguer.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.burguer.model.LoginRequest;
import com.generation.burguer.model.Usuario;
import com.generation.burguer.repository.UsuarioRepository;

@Service
public class UsuarioService {
	private final UsuarioRepository usuarioRepository;
	@Autowired
	public UsuarioService(UsuarioRepository usuarioRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
	}
	public List<Usuario> getAllUsuarios() {
		return usuarioRepository.findAll();
	}

	public Usuario getUsuario(Long id) {
		return usuarioRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Usuario con id "
							+ id + "no existe.")
				);
	}

	public Usuario deleteUsuario(Long id) {
		Usuario userTmp = null;
		if(usuarioRepository.existsById(id)) {
			userTmp=usuarioRepository.findById(id).get();
			usuarioRepository.deleteById(id);
		}
		return userTmp;
	}

	public Usuario addUsuario(Usuario usuario) {
		Usuario tmp =null;
		if(usuarioRepository.findByEmail(usuario.getEmail()).isEmpty()){
			tmp = usuarioRepository.save(usuario);
		}//if
			return tmp;
	}

	public Usuario updateUsuario(Long id, Usuario usuario) {
	        Usuario tmpPro = null;
	        if(usuarioRepository.existsById(id)) {
	            tmpPro = usuarioRepository.findById(id).get();
	                if(usuario.getName() != null) tmpPro.setName(usuario.getName());
	                if(usuario.getEmail() != null) tmpPro.setEmail(usuario.getEmail());
	            
	                usuarioRepository.save(tmpPro);
	            }else {
	                System.out.println("El usuario con el id: " + id + " No existe");
	            }
	        return tmpPro;
	    }
	
	public Boolean getLogin(LoginRequest loginRequest) {
        return existsByEmail(loginRequest.getEmail(),loginRequest.getPass());
    }

      @PersistenceContext
        private EntityManager entityManager;


  public boolean existsByEmail(String email, String pass) {
      String jpql = "SELECT COUNT(u) > 0 FROM Usuario u WHERE u.email = :Email AND u.password = :Pass";
      TypedQuery<Boolean> query = entityManager.createQuery(jpql, Boolean.class);
      query.setParameter("Email", email );
      query.setParameter("Pass", pass );
      return query.getSingleResult();
  }
	}


