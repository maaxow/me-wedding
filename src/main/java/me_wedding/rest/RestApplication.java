package me_wedding.rest;

import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;

import javax.ws.rs.core.Application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.RegexPatternTypeFilter;
import org.springframework.stereotype.Component;

@Component
public class RestApplication extends Application {

	private static final Logger logger = LoggerFactory.getLogger(RestApplication.class);
	/**
	 * Default package for OF rest services.
	 */
	private final static String DEFAULT_REST_SERVICE_PACKAGE = "me_wedding.rest";

	@Override
	public Set<Class<?>> getClasses() {
		final Set<Class<?>> classes = new HashSet<Class<?>>();
		logger.error("Error test");
		System.out.println("################### TEST ######################");
		// Register all rest services from the default package
		final ClassPathScanningCandidateComponentProvider provider = new ClassPathScanningCandidateComponentProvider(
				false);
		provider.addIncludeFilter(new RegexPatternTypeFilter(Pattern.compile(".*")));
		final Set<BeanDefinition> beanDefinitions = provider.findCandidateComponents(DEFAULT_REST_SERVICE_PACKAGE);
		for (BeanDefinition bean : beanDefinitions) {
			try {
//				System.out.println(bean.getBeanClassName() + " : " + bean.isAutowireCandidate());
				classes.add(Class.forName(bean.getBeanClassName()));
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}

		return classes;
	}
}
