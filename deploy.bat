set iisfolder="C:\inetpub\wwwroot\Esquerda" 

rmdir /s /q %iisfolder%
mkdir %iisfolder% 
xcopy /EXCLUDE:excluded.txt /E /Y "C:\Users\Joao\Documents\Sites\Esquerda" %iisfolder%