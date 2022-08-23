
package com.portfolio.fr.Interface;

import com.portfolio.fr.Entity.Persona;
import java.util.List;
import java.util.Optional;


public interface IPersonaService {
        //Traer una lista de personas
    public List<Persona> getPersona();
    
        //Guardar un objeto de tipo persona
    public Persona editPersona(Persona persona);
    
        //Eliminar un objeto por ID
    public void deletePersona(int id);
    
        //Buscar una persona
    public Persona findPersona(int id);
    
    public Optional<Persona> getOne(int id);
       
  
    
}
