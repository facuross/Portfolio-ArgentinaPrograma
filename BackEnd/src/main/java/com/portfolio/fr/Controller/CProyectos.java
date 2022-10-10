
package com.portfolio.fr.Controller;

import com.portfolio.fr.Dto.dtoProyectos;
import com.portfolio.fr.Entity.Proyectos;
import com.portfolio.fr.Security.jwt.Security.Controller.Mensaje;
import com.portfolio.fr.Service.SProyectos;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://proyecto-argentinaprograma.web.app")
@RequestMapping("/proyectos")
public class CProyectos {
    
    @Autowired
    SProyectos sProyectos;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Proyectos>> list(){
        List<Proyectos> list = sProyectos.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Proyectos> getById(@PathVariable("id") int id){
        if(!sProyectos.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Proyectos project = sProyectos.getOne(id).get();
        return new ResponseEntity(project, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyectos dtoproject){
       if(StringUtils.isBlank(dtoproject.getNombreP()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
       if(sProyectos.existsByNombreP(dtoproject.getNombreP()))
            return new ResponseEntity(new Mensaje("Este proyecto ya exitse"), HttpStatus.BAD_REQUEST);
        
        Proyectos project = new Proyectos (dtoproject.getNombreP(), dtoproject.getDescripcionP());
        sProyectos.save(project);
        return new ResponseEntity(new Mensaje("Proyecto agregado"), HttpStatus.CREATED);
    }
                
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoProyectos dtoproject){
        if(!sProyectos.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        
        if (sProyectos.existsByNombreP(dtoproject.getNombreP()) && sProyectos.getByNombreP(dtoproject.getNombreP()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ese proyecto ya existe"), HttpStatus.BAD_REQUEST);
        
        if(StringUtils.isBlank(dtoproject.getNombreP()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Proyectos project = sProyectos.getOne(id).get();
        project.setNombreP(dtoproject.getNombreP());
        project.setDescripcionP(dtoproject.getDescripcionP());
        
        sProyectos.save(project);
        return new ResponseEntity(new Mensaje("Experiencia Actualizada"), HttpStatus.OK);
                
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
         if(!sProyectos.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
         
         sProyectos.delete(id);
         
         return new ResponseEntity(new Mensaje("Proyecto eliminado"), HttpStatus.OK);
    }
}
