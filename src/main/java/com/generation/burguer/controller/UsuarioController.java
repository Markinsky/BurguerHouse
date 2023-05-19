package com.generation.burguer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.burguer.model.Usuario;
import com.generation.burguer.service.UsuarioService;

@RestController
@RequestMapping(path="/api/")
public class UsuarioController {
	private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Usuario> getUsuarios(){
        return usuarioService.getAllUsuarios();
    }

    @GetMapping (path="{userId}")
    public Usuario getUsuario(@PathVariable("userId") Long id) {
        return usuarioService.getUsuario(id);
    }

    @DeleteMapping (path="{userId}")
    public Usuario deleteUsuario(@PathVariable("userId") Long id) {
        return usuarioService.deleteUsuario(id);
    }

    @PostMapping
    public Usuario addUsuario(@RequestBody Usuario usuario) {
        return usuarioService.addUsuario(usuario);
    }

    //Data Transfer Object - DTO
    @PutMapping(path="{userId}")
    public Usuario updateUsuario(@PathVariable("userId") Long id,
                                @RequestBody Usuario usuario) {
        return usuarioService.updateUsuario(id, usuario);
    }

}

