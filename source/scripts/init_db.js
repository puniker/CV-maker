const mysql = require('mysql')

// configuración de la bbdd en la que va a meter el contenido
const config = {
    hots : 'localhost',
    user : 'root',
    password : 'root',
    database : 'cv-maker_script',
    socketPath: '/var/run/mysqld/mysqld.sock'
}


const connection = mysql.createConnection( config )

// varibale con los datos de tablas y filas
const tables = [
    {
        table_name: "cv_data_estudios",
        sql: "CREATE TABLE cv_data_estudios (id VARCHAR(40) PRIMARY KEY, target_id VARCHAR(40), titulo VARCHAR(30), centro VARCHAR(20), lugar VARCHAR(20), fecha_inicio VARCHAR(20), fecha_fin VARCHAR(20), descripcion VARCHAR(50), orden VARCHAR(2))",
        data: "INSERT INTO `cv_data_estudios` (`id`, `target_id`, `titulo`, `centro`, `lugar`, `fecha_inicio`, `fecha_fin`, `descripcion`, `orden`) VALUES ('1', 2, 'bachiller', 'colegio basauri', 'basauri', '2000-01-01 00:00:00', '2010-01-01 00:00:00', 'estuve en el cole', '0'), ('2', 2, 'desarrollo apps', 'grado sup', 'bilbao', '2020-01-01 00:00:00', '2020-01-01 00:00:00', 'apredi apps', '1');"
    },
    {
        table_name: "cv_data_experiencia",
        sql: "CREATE TABLE cv_data_experiencia (id varchar(40) PRIMARY KEY, target_id int(20), puesto varchar(30), empresa varchar(20), lugar varchar(20), fecha_inicio varchar(20), fecha_fin varchar(20), descripcion varchar(70), orden int(2))",
        data: "INSERT INTO `cv_data_experiencia` (`id`, `target_id`, `puesto`, `empresa`, `lugar`, `fecha_inicio`, `fecha_fin`, `descripcion`, `orden`) VALUES ('1', 2, 'Desarrollador de software', 'Dominion Global', 'Bilbao', '2017', '2021', 'Hize apps', 0), ('2ce1fe10-6c8d-4a18-a402-fadff3993343', 2, 'Jefazo', 'Google', 'California', '2010', '2016', 'Fui el jefe y CEO de Google una empresa bastante conocida y así', 1), ('4c33248d-c4f4-4c56-9df6-2e394d90819b', 2, 'Músico de éxito', 'ACDC', 'Holanda', '2000', '2010', 'Toque musica por toda europa y fuí bastante exitoso', 2);"
    },
    {
        table_name: "cv_data_general",
        sql: "CREATE TABLE cv_data_general (id varchar(40) PRIMARY KEY, nombre varchar(20) DEFAULT '', apellido varchar(40) DEFAULT '', email varchar(40) DEFAULT '', fecha_nacimiento varchar(20) DEFAULT '', direccion varchar(60) DEFAULT '', telefono varchar(9) DEFAULT '', lugar_nacimiento varchar(20) DEFAULT '', c_postal varchar(5) DEFAULT '', ciudad_pueblo varchar(20) DEFAULT '', genero varchar(10) DEFAULT '', nacionalidad varchar(20) DEFAULT '', estado_civil varchar(20) DEFAULT '', sitio_web varchar(50) DEFAULT '', linkedin varchar(50) DEFAULT '', twitter varchar(30) DEFAULT '', texto_descriptivo varchar(200) DEFAULT '')",
        data: "INSERT INTO `cv_data_general` (`id`, `nombre`, `apellido`, `email`, `fecha_nacimiento`, `direccion`, `telefono`, `lugar_nacimiento`, `c_postal`, `ciudad_pueblo`, `genero`, `nacionalidad`, `estado_civil`, `sitio_web`, `linkedin`, `twitter`, `texto_descriptivo`) VALUES ('1', 'adminisa', 'adminnnnn', 'iker.sastre@gmail.-com', '1997-08-08 00:00:00', '7623486', '', '', '', '', '', '', '', '', '', '', ''), ('2', 'Iker', 'Sastre Antón', 'iker.sastre97@gmail.com', '1997-08-08', 'San Biator', '680983974', 'Barakaldo', '48970', 'basauri', 'Masculino', 'Española', 'En pareja', 'ikersastre.es', 'ikersastreanton', '@ikersastre8', 'Soy un chico muy majo que desarrolla aplicaciones web.');"
    },
    {
        table_name: "cv_plantillas",
        sql: "CREATE TABLE cv_plantillas (id varchar(40) PRIMARY KEY, machine_name varchar(20), name varchar(203), author varchar(20), created_date varchar(30), thumbnail varchar(100), likes int(10), status int(1))",
        data: "INSERT INTO `cv_plantillas` (`id`, `machine_name`, `name`, `author`, `created_date`, `thumbnail`, `likes`, `status`) VALUES ('1', 'default', 'deafult', 'Iker Sastre', '30/11/2021', 'deafult.svg', 1, 1), ('2', 'pillar_theme', 'PIllar theme', 'xriley', '30/11/2021', 'pillar_theme.svg', 0, 1);"
    },
    {
        table_name: "cv_users",
        sql: "CREATE TABLE cv_users (id varchar(40) PRIMARY KEY COMMENT 'uniq id del usuario', username varchar(20) COMMENT 'nombre de usuario', password varchar(50) COMMENT 'contraseña', status int(1) COMMENT 'Estado del usuario: 0- deshabilitado, 1-habilitado', is_admin int(1) )",
        data: "INSERT INTO `cv_users` (`id`, `username`, `password`, `status`, `is_admin`) VALUES ('1', 'admin', 'admin', 1, 1), ('2', 'puniker', 'admin', 1, 1);"
    }
]

// crea las tablas y sus datos
tables.forEach( ( item ) => {
    
    connection.query(item.sql, (err, result) => {
        if (err) console.error(err)
        console.log(`Tabla ${item.table_name} creada correctamente.`)

        connection.query(item.data, (e, result) => {
            if (e) console.error(e)
            console.log(`Datos introducidos en ${item.table_name}.`)
        })
    })
})