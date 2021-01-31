insert into "calibers" ("caliber")
     values ('.223 Remington'),
            ('.300 Win Mag'),
            ('.308 Winchester'),
            ('6.5mm Creedmoor'),
            ('.338 Lapua Magnum');

insert into "ballisticsData" ("caliberId", "distance", "bulletDrop")
     values ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 0, -1.5),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 100, 0),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 200, -3.6),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 300, -13.5),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 400, -30.9),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 500, -57.6),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 600, -95.6),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 700, -148),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 800, -218),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 900, -309.8),
            ((select "caliberId" from "calibers" where "caliber" =  '.223 Remington'), 1000, -428);

insert into "ballisticsData" ("caliberId", "distance", "bulletDrop")
     values ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 0, -1.5),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 100, 0),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 200, -3.2),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 300, -11.8),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 400, -26.9),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 500, -49.7),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 600, -81.7),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 700, -124.9),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 800, -181.5),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 900, -254.4),
            ((select "caliberId" from "calibers" where "caliber" =  '.300 Win Mag'), 1000, -347.1);

insert into "ballisticsData" ("caliberId", "distance", "bulletDrop")
     values ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 0, -1.5),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 100, 0),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 200, -4),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 300, -14.4),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 400, -32.3),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 500, -58.9),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 600, -95.8),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 700, -144.9),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 800, -208.4),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 900, -289),
            ((select "caliberId" from "calibers" where "caliber" =  '.308 Winchester'), 1000, -389.7);

insert into "ballisticsData" ("caliberId", "distance", "bulletDrop")
     values ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 0, -1.5),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 100, 0),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 200, -3.8),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 300, -13.7),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 400, -30.2),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 500, -54.5),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 600, -87.5),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 700, -130.5),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 800, -185),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 900, -252.5),
            ((select "caliberId" from "calibers" where "caliber" =  '6.5mm Creedmoor'), 1000, -335);
