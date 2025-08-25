import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandingComponent } from './branding.component';

describe('BrandingComponent', () => {
  let component: BrandingComponent;
  let fixture: ComponentFixture<BrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders default branding text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Made with');
    expect(compiled.textContent).toContain('Unlayer');
  });

  it('renders minimal variant', () => {
    component.variant = 'minimal';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toBe('Made with Unlayer');
  });

  it('renders full variant', () => {
    component.variant = 'full';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Made with');
    expect(compiled.textContent).toContain('Unlayer');
  });

  it('applies custom className', () => {
    component.className = 'custom-class';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.className).toContain('custom-class');
  });

  it('applies size classes', () => {
    component.size = 'large';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.className).toContain('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    component.variant = 'minimal';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.className).toContain('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.className).toContain('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    const compiled = fixture.nativeElement;
    const spans = compiled.querySelectorAll('span');
    const strongs = compiled.querySelectorAll('strong');
    expect(spans.length).toBe(1);
    expect(strongs.length).toBe(1);
    expect(spans[0].textContent).toBe('Made with ');
    expect(strongs[0].textContent).toBe('Unlayer');
  });

  it('renders with correct HTML structure for minimal variant', () => {
    component.variant = 'minimal';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const spans = compiled.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('Made with Unlayer');
  });
});
