
package com.portfolio.fr.Controller;


import com.portfolio.fr.Entity.Persona;
import com.portfolio.fr.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class PersonaController {
        @Autowired IPersonaService ipersonaService;
        
        @GetMapping("personas/get")
        public List<Persona> getPersona() {
            return ipersonaService.getPersona();
        }
        
        @PreAuthorize("hasRole('ADMIN')")
        @PostMapping("personas/create")
        public String createPersona(@RequestBody Persona persona) {
            ipersonaService.savePersona(persona);
            return "Se ha creado a la persona";
        }
        
        @PreAuthorize("hasRole('ADMIN')")
        @DeleteMapping("personas/delete/{id}")
        public String deletePersona(@PathVariable Long id) {
            ipersonaService.deletePersona(id);
            return "Se ha eliminado a la persona";
        }
        
        @PreAuthorize("hasRole('ADMIN')")
        @PutMapping("personas/edit/{id}")
        public Persona editPersona(@PathVariable Long id,
                                               @RequestParam("nombre") String nuevoNombre,
                                               @RequestParam("apellido") String nuevoApellido,
                                               @RequestParam("img") String nuevoImg) {
               Persona persona = ipersonaService.findPersona(id);
               
               persona.setNombre(nuevoNombre);
               persona.setApellido(nuevoApellido);
               persona.setImg(nuevoImg);
               
               ipersonaService.savePersona(persona);
               return persona;
        }
        
        @GetMapping("personas/traer/perfil")
        public Persona findPersona() {
            return ipersonaService.findPersona((long)1);
        }
}
