
package com.portfolio.fr.Controller;

import com.portfolio.fr.Dto.dtoSkills;
import com.portfolio.fr.Entity.Skills;
import com.portfolio.fr.Security.jwt.Security.Controller.Mensaje;
import com.portfolio.fr.Service.SkillsService;
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
@RequestMapping("/skills")
@CrossOrigin(origins = "https://proyecto-argentinaprograma.web.app")

public class CSkills {
    @Autowired
    SkillsService skillsService;
    
     @GetMapping("/lista")
    public ResponseEntity<List<Skills>> list(){
        List<Skills> list = skillsService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Skills> getById(@PathVariable("id") int id){
        if(!skillsService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Skills skill = skillsService.getOne(id).get();
        return new ResponseEntity(skill, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoSkills dtoskill){
       if(StringUtils.isBlank(dtoskill.getTitle()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
       if(skillsService.existsByTitle(dtoskill.getTitle()))
            return new ResponseEntity(new Mensaje("Esa experiencia exitse"), HttpStatus.BAD_REQUEST);
        
        Skills skill = new Skills (dtoskill.getTitle(), dtoskill.getPercent(), dtoskill.getImg());
        skillsService.save(skill);
        return new ResponseEntity(new Mensaje("Experiencia agregada"), HttpStatus.CREATED);
    }
                
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoSkills dtoskill){
        if(!skillsService.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        
        if (skillsService.existsByTitle(dtoskill.getTitle()) && skillsService.getByTitle(dtoskill.getTitle()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);
        
        if(StringUtils.isBlank(dtoskill.getTitle()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Skills skill = skillsService.getOne(id).get();
        skill.setTitle(dtoskill.getTitle());
        skill.setPercent(dtoskill.getPercent());
        skill.setImg(dtoskill.getImg());
        
        skillsService.save(skill);
        return new ResponseEntity(new Mensaje("Experiencia Actualizada"), HttpStatus.OK);
                
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
         if(!skillsService.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
         
         skillsService.delete(id);
         
         return new ResponseEntity(new Mensaje("Experiencia eliminada"), HttpStatus.OK);
    }
    
}
