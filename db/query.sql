create database groceries_List;

use groceries_List;

drop table groceries_items;

create table groceries_items(
id integer not null auto_increment primary key,
item varchar(100) not null,
quantity integer,
units varchar(5),
getItem int(1) not null
);


select * from groceries_items