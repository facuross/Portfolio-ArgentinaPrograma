
package com.portfolio.fr.Dto;

import javax.validation.constraints.NotBlank;


public class dtoSkills {
    @NotBlank
    private String title;
    @NotBlank
    private String percent;
    private String img;

    public dtoSkills() {
    }

    public dtoSkills(String title, String percent, String img) {
        this.title = title;
        this.percent = percent;
        this.img = img;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPercent() {
        return percent;
    }

    public void setPercent(String percent) {
        this.percent = percent;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
     
}
