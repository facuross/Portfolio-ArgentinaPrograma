
package com.portfolio.fr.Repository;

import com.portfolio.fr.Entity.Educacion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Llamamos a la clase a la que hace referencia seguida del tipo de dato del Id (Integer)
@Repository
public interface REducacion extends JpaRepository<Educacion, Integer> {
    //Agregamos dos métodos(ver en que consisten)
    public Optional<Educacion> findByNombreEdu (String nombreEdu);
    public boolean existsByNombreEdu (String nombreEdu);
}
