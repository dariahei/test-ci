import helthLevel from '../index.js';

const handler = test.each([
    [{health: 100}, 'healthy'],
    [{health: 51}, 'healthy'],
    [{health: 50}, 'wounded'],
    [{health: 16}, 'wounded'],
    [{health: 15}, 'critical'],
    [{health: -2}, 'critical']
]) 
handler (`user with %s`, (health, status) => {
        const result = helthLevel(health);
        expect(result).toBe(status);
    });