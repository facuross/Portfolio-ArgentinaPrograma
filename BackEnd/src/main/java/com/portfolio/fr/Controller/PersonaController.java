
package com.portfolio.fr.Controller;


import com.portfolio.fr.Dto.dtoPersona;
import com.portfolio.fr.Entity.Persona;
import com.portfolio.fr.Interface.IPersonaService;
import com.portfolio.fr.Security.jwt.Security.Controller.Mensaje;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "https://proyecto-argentinaprograma.web.app")
public class PersonaController {
        @Autowired IPersonaService ipersonaService;
        
        @GetMapping("personas/get")
        public List<Persona> getPersona() {
            return ipersonaService.getPersona();
        }
        
        @PreAuthorize("hasRole('ADMIN')")
        @PostMapping("personas/create")
        public String createPersona(@RequestBody Persona persona) {
            ipersonaService.editPersona(persona);
            return "Se ha creado a la persona";
        }
        
        @PreAuthorize("hasRole('ADMIN')")
        @DeleteMapping("personas/delete/{id}")
        public String deletePersona(@PathVariable int id) {
            ipersonaService.deletePersona(id);
            return "Se ha eliminado a la persona";
        }
        
//        @PreAuthorize("hasRole('ADMIN')")
        @PutMapping("personas/edit/{id}")
        public ResponseEntity<Persona> update(@PathVariable int id, @RequestBody dtoPersona dtopersona){
//            Persona updatePersona = ipersonaService.editPersona(persona);
//            return new ResponseEntity<>(updatePersona, HttpStatus.OK);
        
//        public ResponseEntity<?> update(@PathVariable("id") Long id){
//        
        Persona persona = ipersonaService.getOne(id).get();
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setImg(dtopersona.getImg());
        persona.setTitulo(dtopersona.getTitulo());
        persona.setDescripcion(dtopersona.getDescripcion());
        
        ipersonaService.editPersona(persona);
        return new ResponseEntity(new Mensaje("Experiencia Actualizada"), HttpStatus.OK);
//        public Persona editPersona(@PathVariable Long id,
//                                               @RequestParam("nombre") String nuevoNombre,
//                                               @RequestParam("apellido") String nuevoApellido,
//                                               @RequestParam("img") String nuevoImg, 
//                                               @RequestParam("titulo") String nuevoTitulo,
//                                               @RequestParam("descripcion") String nuevaDescrip){
//               Persona persona = ipersonaService.findPersona(id);
//               
//               persona.setNombre(nuevoNombre);
//               persona.setApellido(nuevoApellido);
//               persona.setImg(nuevoImg);
//               persona.setTitulo(nuevoTitulo);
//               persona.setDescripcion(nuevaDescrip);
//               ipersonaService.savePersona(persona);
//               return persona;
     }
        
        @GetMapping("personas/traer/perfil")
        public Persona findPersona() {
            return ipersonaService.findPersona((int)1);
        }
}
