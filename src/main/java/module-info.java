module com.md.gm {
    requires javafx.controls;
    requires javafx.fxml;
    requires de.jensd.fx.glyphs.fontawesome;
    requires java.sql;
    requires org.xerial.sqlitejdbc;


    opens com.md.gm to javafx.fxml;
    exports com.md.gm;
    exports com.md.gm.Controllers;
    exports com.md.gm.Controllers.Admin;
    exports com.md.gm.Controllers.Client;
    exports com.md.gm.Models;
    exports com.md.gm.Views;
    opens com.md.gm.Controllers to javafx.fxml;
}