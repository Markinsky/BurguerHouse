package com.generation.burguer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.burguer.model.LoginRequest;
import com.generation.burguer.model.Usuario;
import com.generation.burguer.service.UsuarioService;

@RestController
public class loginController {

    private final UsuarioService usuarioService;

    @Autowired
    public loginController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> getLog(@RequestBody LoginRequest loginRequest) {
        //System.out.println("Email: "+ loginRequest.getEmail() + " Contra: " + loginRequest.getPass());
        if (usuarioService.getLogin(loginRequest)) {
            return ResponseEntity.ok("Login Exitoso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login fallado");
        }
}
}