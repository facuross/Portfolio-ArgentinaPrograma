
package com.portfolio.fr.Service;

import com.portfolio.fr.Entity.Persona;
import com.portfolio.fr.Interface.IPersonaService;
import com.portfolio.fr.Repository.IPersonaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepository ipersonaRepository;
        
        
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona =ipersonaRepository.findAll();
        return persona;
    }

    @Override
    public Persona editPersona(Persona persona) {
        return ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(int id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(int id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }

    @Override
    public Optional<Persona> getOne(int id) {
       return  ipersonaRepository.findById(id);
    }



}
