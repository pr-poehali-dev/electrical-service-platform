import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const services = [
    { icon: 'Zap', title: 'Монтаж электропроводки', description: 'Профессиональная прокладка кабелей и установка розеток', price: 'от 3000 ₽' },
    { icon: 'Lightbulb', title: 'Установка освещения', description: 'Монтаж люстр, светильников и LED-систем', price: 'от 1500 ₽' },
    { icon: 'Power', title: 'Электрощитовое оборудование', description: 'Сборка и монтаж электрощитов, автоматики', price: 'от 5000 ₽' },
    { icon: 'Cable', title: 'Ремонт электросетей', description: 'Диагностика и устранение неисправностей', price: 'от 2000 ₽' },
    { icon: 'Home', title: 'Умный дом', description: 'Установка систем автоматизации', price: 'от 10000 ₽' },
    { icon: 'Shield', title: 'Заземление и УЗО', description: 'Обеспечение безопасности электросети', price: 'от 4000 ₽' },
  ];

  const priceList = [
    { service: 'Установка розетки / выключателя', price: '500 ₽' },
    { service: 'Прокладка кабеля (за 1 м)', price: '150 ₽' },
    { service: 'Монтаж люстры / светильника', price: '1500 ₽' },
    { service: 'Замена автомата в щитке', price: '800 ₽' },
    { service: 'Сборка электрощита', price: 'от 5000 ₽' },
    { service: 'Штробление стен (за 1 м)', price: '300 ₽' },
    { service: 'Установка счетчика электроэнергии', price: '2500 ₽' },
    { service: 'Диагностика проводки', price: '1000 ₽' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">ElectricPoiskNeo</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Прайс</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Онлайн-запись</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
                Профессиональные электромонтажные работы
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Качественно выполним любые работы по электричеству: от замены розетки до полного монтажа проводки
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#booking">
                    <Icon name="CalendarCheck" size={20} className="mr-2" />
                    Записаться онлайн
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="tel:+79991234567">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 123-45-67
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/0e6ab2ec-6e4b-4a0a-b77c-be6dd7279d18/files/fa564bfc-94b8-47b4-9b0e-9c09b1a13369.jpg" 
                alt="Электромонтажные работы"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выполняем полный спектр электромонтажных и ремонтных работ для квартир, домов и офисов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">Прозрачные цены на все виды работ</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="divide-y">
                  {priceList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-6 hover:bg-muted/30 transition-colors">
                      <span className="text-foreground font-medium">{item.service}</span>
                      <span className="text-xl font-bold text-accent">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              * Точная стоимость работ определяется после осмотра объекта
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Онлайн-запись</h2>
              <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами для уточнения деталей</p>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Выберите услугу *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу из списка" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Желаемая дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Желаемое время *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите подробнее, какие работы необходимо выполнить..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-muted/30 to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Контакты</h2>
            <p className="text-lg text-white/80">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <a href="tel:+79991234567" className="text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:info@electromaster.ru" className="text-primary hover:underline">
                  info@electromaster.ru
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  Москва, ул. Примерная, д. 1
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" size={24} />
            <span className="text-xl font-bold">ЭлектроМастер</span>
          </div>
          <p className="text-white/70">© 2024 ЭлектроМастер. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;