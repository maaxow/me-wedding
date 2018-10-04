# ME Wedding App

Maxime & Elodie Wedding website.
It's the beginning of the project.

# Requierments

* Tomcat
* MySQL Database, with a database named `me_wedding`
* Create the file `spring-datasource.xml` and add this in the `src/main/resources/spring` and add a bean like this 

```xml
	<bean id="datasource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="com.mysql.jdbc.Driver" />
		<property name="url" value="jdbc:mysql://localhost:3306/me_wedding?useSSL=false" />
		<property name="username" value="user" />
		<property name="password" value="password" />
	</bean>
```
	
# Building

Build the project with Maven `mvn clean install -DskipTests` (to test is to doubt)

# Starting

Add the War in the Tomcat Webapps folder. And run Tomcat.