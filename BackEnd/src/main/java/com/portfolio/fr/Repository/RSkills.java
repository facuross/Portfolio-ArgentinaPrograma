
package com.portfolio.fr.Repository;

import com.portfolio.fr.Entity.Skills;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RSkills extends JpaRepository<Skills, Integer>{
    public Optional<Skills> findByTitle (String title);
    public boolean existsByTitle (String title);
    
}
