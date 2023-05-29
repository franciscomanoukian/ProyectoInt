USE proyectoIntDB;
ALTER TABLE productos
ADD imagen VARCHAR(500);

UPDATE productos
SET imagen = 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/Q/DQ1471-100_0.jpg'
WHERE id =1;

UPDATE productos
SET imagen = 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw03ff94f4/products/CO_169953C/CO_169953C-1.JPG'
WHERE id =2;

UPDATE productos
SET imagen = 'https://static.goldengoose.com/image/upload/w_auto,c_scale,f_auto,q_auto/v1659111556/Style/ECOMM/GMF00102.F002729-10950'
WHERE id =3;

UPDATE productos
SET imagen = 'https://cdn.shopify.com/s/files/1/0017/5908/4588/products/599627_01_jpg_1200x.jpg?v=1640680862'
WHERE id =4;

UPDATE productos
SET imagen = 'https://www.veja-store.com/media/catalog/product/cache/527447f8cffec2edb3591f96240a2d24/v/e/veja_eo020005_lateral.jpg'
WHERE id =5;

UPDATE productos
SET imagen = 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/N/DN2158-101_0_8.jpg'
WHERE id =6;

UPDATE productos
SET imagen = 'https://www.zadigetvoltaire.com.ar/uploads/picture/image/5338/PSHAT1709F01-1a__1_.jpg'
WHERE id =7;

UPDATE productos
SET imagen = 'https://us-zadig-et-voltaire.imgix.net/catalog/product/s/w/swsn00405_flash_1_2.jpg'
WHERE id =8;

UPDATE productos
SET imagen = 'https://www.mrporter.com/variants/images/42247633208420952/in/w1200_q60.jpg'
WHERE id =9;

UPDATE productos
SET imagen = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Zapatillas_Samba_Classic_Blanco_772109_01_standard.jpg'
WHERE id =10;