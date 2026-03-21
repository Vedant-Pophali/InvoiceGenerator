package com.example.invoicegenerator.Security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;
import java.io.IOException;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ClerkJWTAuthFilterTest {

    @Mock
    private ClerkJWKSProvider jwksProvider;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private FilterChain filterChain;

    @InjectMocks
    private ClerkJWTAuthFilter filter;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(filter, "clerkIssuer", "https://valid.issuer");
    }

    @Test
    void testWebhooksBypass() throws ServletException, IOException {
        when(request.getRequestURI()).thenReturn("/api/webhooks/stripe");

        filter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        verifyNoInteractions(response);
    }

    @Test
    void testMissingAuthorizationHeader() throws ServletException, IOException {
        when(request.getRequestURI()).thenReturn("/api/protected");
        when(request.getHeader("Authorization")).thenReturn(null);

        filter.doFilterInternal(request, response, filterChain);

        verify(response).sendError(HttpServletResponse.SC_FORBIDDEN, "Missing or invalid Authorization header");
        verifyNoInteractions(filterChain);
    }

    @Test
    void testInvalidAuthorizationHeaderPrefix() throws ServletException, IOException {
        when(request.getRequestURI()).thenReturn("/api/protected");
        when(request.getHeader("Authorization")).thenReturn("NotBearer randomString");

        filter.doFilterInternal(request, response, filterChain);

        verify(response).sendError(HttpServletResponse.SC_FORBIDDEN, "Missing or invalid Authorization header");
        verifyNoInteractions(filterChain);
    }

    @Test
    void testMalformedJwtStructure() throws ServletException, IOException {
        when(request.getRequestURI()).thenReturn("/api/protected");
        when(request.getHeader("Authorization")).thenReturn("Bearer singlechunk");

        filter.doFilterInternal(request, response, filterChain);

        verify(response).sendError(HttpServletResponse.SC_BAD_REQUEST, "Malformed JWT structure");
        verifyNoInteractions(filterChain);
    }

    @Test
    void testMalformedJwtHeaderMissingKid() throws ServletException, IOException {
        when(request.getRequestURI()).thenReturn("/api/protected");
        
        String dummyHeader = "{\"typ\":\"JWT\"}";
        String b64Header = java.util.Base64.getUrlEncoder().encodeToString(dummyHeader.getBytes());
        when(request.getHeader("Authorization")).thenReturn("Bearer " + b64Header + ".payload.signature");

        filter.doFilterInternal(request, response, filterChain);

        verify(response).sendError(HttpServletResponse.SC_BAD_REQUEST, "Malformed JWT header");
        verifyNoInteractions(filterChain);
    }
}
