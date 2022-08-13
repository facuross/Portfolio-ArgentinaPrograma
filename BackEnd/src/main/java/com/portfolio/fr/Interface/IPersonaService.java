
package com.portfolio.fr.Interface;

import com.portfolio.fr.Entity.Persona;
import java.util.List;


public interface IPersonaService {
        //Traer una lista de personas
    public List<Persona> getPersona();
    
        //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
        //Eliminar un objeto por ID
    public void deletePersona(Long id);
    
        //Buscar una persona
    public Persona findPersona(Long id);
    
}
