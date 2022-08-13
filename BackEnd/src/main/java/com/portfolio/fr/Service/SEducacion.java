
package com.portfolio.fr.Service;

import com.portfolio.fr.Entity.Educacion;
import com.portfolio.fr.Repository.REducacion;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//Mantiene la persistencia en base de datos
@Service
@Transactional
public class SEducacion {
    @Autowired
    REducacion rEducacion;
    
    //armar lista de todas las educaciones
    public List<Educacion> list(){
        return rEducacion.findAll();
    }
    
    //buscar una edu por ID. Se usa optional cuando el id puede o no existir
    public Optional<Educacion> getOne(int id){
        return rEducacion.findById(id);
    }
    
    public Optional<Educacion> getByNombreEdu (String nombreEdu) {
        return rEducacion.findByNombreEdu(nombreEdu);
    }
    
    public void save(Educacion edu){
        rEducacion.save(edu);
    }
    
    public void delete(int id){
        rEducacion.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rEducacion.existsById(id);
    }
    
    public boolean existsByNombreEdu(String nombreEdu){
        return rEducacion.existsByNombreEdu(nombreEdu);
    }
    
    
    
}