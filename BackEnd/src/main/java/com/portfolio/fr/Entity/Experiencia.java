
package com.portfolio.fr.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String inicio;
    private String fin;
    private String descripcionE;

    public Experiencia() {
    }

   /* public Experiencia(int id, String nombreE, String descripcionE) {
        this.id = id;
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }*/

    public Experiencia(String nombreE, String descripcionE, String inicio, String fin) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicio = inicio;
        this.fin = fin;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreE() {
        return nombreE;
    }

    public String getInicio() {
        return inicio;
    }

    public void setInicio(String inicio) {
        this.inicio = inicio;
    }

    public String getFin() {
        return fin;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }
    
    
}
