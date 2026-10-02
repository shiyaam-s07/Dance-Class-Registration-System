package com.example.student_backend;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class DancerController {

    @Autowired
    private DancerRepository repository;

    @PostMapping("/dancers")
    public Dancer addDancer(@RequestBody Dancer dancer) {
        return repository.save(dancer);
    }

    @GetMapping("/dancers")
    public List<Dancer> getAllDancers() {
        return repository.findAll();
    }
}