import {describe, it,expect} from 'vitest';
import {escapeHtml}from './util.js';

 describe('Testes de Sanitização (escapeHtml)', () => {
   it('deve converter caracteres especiais em entidades HTML seguras', () => {
     const inputInseguro = '<script>alert("XSS")</script>';
     const resultadoEsperado = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;';
    
     expect(escapeHtml(inputInseguro)).toBe(resultadoEsperado);
   });
   
   it('não deve alterar textos simples que não possuem caracteres especiais', () => {
     expect(escapeHtml('Interestelar')).toBe('Interestelar');
   });
 });
