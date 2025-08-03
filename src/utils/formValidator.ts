export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export interface FieldValidation {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  customRules?: ValidationRule[];
}

export interface ValidationRules {
  [key: string]: FieldValidation;
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phonePattern = /^\+?[\d\s-()]+$/;
export const zipCodePattern = /^[\d\s-]+$/;

export const defaultValidationRules: ValidationRules = {
  firstName: {
    required: true,
    minLength: 2,
    pattern: /^[A-Za-zÀ-ÿ\s'-]+$/
  },
  lastName: {
    required: true,
    minLength: 2,
    pattern: /^[A-Za-zÀ-ÿ\s'-]+$/
  },
  email: {
    required: true,
    pattern: emailPattern
  },
  phone: {
    required: true,
    pattern: phonePattern
  },
  country: {
    required: true,
    minLength: 2,
    pattern: /^[A-Za-zÀ-ÿ\s'-]+$/
  },
  city: {
    required: true,
    minLength: 2,
    pattern: /^[A-Za-zÀ-ÿ\s'-]+$/
  },
  zipCode: {
    required: true,
    pattern: zipCodePattern
  },
  address: {
    required: true,
    minLength: 5
  }
};

export class FormValidator {
  private rules: ValidationRules;

  constructor(rules: ValidationRules = defaultValidationRules) {
    this.rules = rules;
  }

  private validateField(name: string, value: string): string | null {
    const rules = this.rules[name];
    if (!rules) return null;

    if (rules.required && !value.trim()) {
      return `${name} is required`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return `Invalid ${name} format`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${name} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${name} must be at most ${rules.maxLength} characters`;
    }

    if (rules.customRules) {
      for (const rule of rules.customRules) {
        if (!rule.validate(value)) {
          return rule.message;
        }
      }
    }

    return null;
  }

  validateForm<T extends object>(data: T): Record<keyof T, string | null> {
    const errors = {} as Record<keyof T, string | null>;
    
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = String(data[key]);
        errors[key] = this.validateField(key, value);
      }
    }

    return errors;
  }

  hasErrors(errors: Record<string, string | null>): boolean {
    return Object.values(errors).some(error => error !== null);
  }
}
