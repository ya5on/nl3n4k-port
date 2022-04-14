import p5 from "vue-p5";

export class Walker {
    constructor(pos, v) {
        this.pos = pos;
        this.prevPos = pos;
        this.v = v;
    }
    isOut(s) {
        return (
            this.pos.x < 0
            || this.pos.x > s.width
            || this.pos.y < 0
            || this.pos.y > s.height
        );
    }
    updVelocity(s) {
        this.prevPos = s.createVector(this.pos.x, this.pos.y);
        this.v.x += Math.sin(this.pos.x);
        this.v.y += Math.sin(this.pos.y);
    }
    move() {
        this.pos = p5.Vector.add(this.pos, this.v);
    }

    draw(s) {
        s.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        this.prevPos = s.createVector(this.pos.x, this.pos.y);
    }

}