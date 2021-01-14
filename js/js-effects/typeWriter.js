export function typeWriter() {
    var TextType = function(element, toRotate, period) {
        this.toRotate = toRotate;
        this.element = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.text = '';
        this.tick();
        this.isDeleting = false;
    };

    TextType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.text = fullTxt.substring(0, this.text.length - 1);
        } else {
        this.text = fullTxt.substring(0, this.text.length + 1);
        }

        this.element.innerHTML = '<span class="wrap">'+this.text+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.text === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TextType(elements[i], JSON.parse(toRotate), period);
            }
        }
       
    };
}