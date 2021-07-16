import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.valor = 5;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when click in botton increment or decrement', () => {

    it('should increment value', () => {
      component.incrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(6);
      component.incrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(7);
    });

    it('should increment max value', () => {
      component.valor = 100;
      component.incrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(100);
    });

    it('should decrement value', () => {
      component.decrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(4);
      component.decrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(3);
    });

    it('should decrement mim value', () => {
      component.valor = 0;
      component.decrementar();
      fixture.detectChanges();
      expect(component.valor).toBe(0);
    });
  });

  describe('when press Keyboard', () => {
    it('should increment value ArrowUp', () => {
      const ev = new KeyboardEvent('keydown', { key: "ArrowUp", code: "ArrowUp"})
      fixture.detectChanges();
      component.onKeyUp(ev)
      fixture.detectChanges();
      expect(component.valor).toBe(6);
    });

    it('should decrement value ArrowDown', () => {
      const ev = new KeyboardEvent('keydown', { key: "ArrowDown", code: "ArrowDown"})
      fixture.detectChanges();
      component.onKeyUp(ev)
      fixture.detectChanges();
      expect(component.valor).toBe(4);
    });

    it('should stay with same value', () => {
      const ev = new KeyboardEvent('keydown', { key: "w", code: "KeyW"})
      fixture.detectChanges();
      component.onKeyUp(ev)
      fixture.detectChanges();
      expect(component.valor).toBe(5);
    });
  });

  describe('when has focus event', () => {
    it('should be focused', () => {
      const ev = new FocusEvent('focus')
      fixture.detectChanges();
      component.onFocus(ev)
      fixture.detectChanges();
      expect(component.foco).toBe(true)
    });

    it('should be not focused', () => {
      const ev = new FocusEvent('focus')
      fixture.detectChanges();
      component.onBlur(ev)
      fixture.detectChanges();
      expect(component.foco).toBe(false)
    });
  });
});
