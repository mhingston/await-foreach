const awaitForEach = (options) =>
{
    options = options || {};
    
    function forEach(...args)
    {
        let collection, fn;

        if(options.monkeyPatch)
        {
            collection = this;
            fn = args[0];
        }

        else
        {
            collection = args[0];
            fn = args[1];
        }

        return new Promise((resolve, reject) =>
        {
            let count = 0;
            collection._forEach(async (currentValue, index, array) =>
            {
                await fn(currentValue, index, array);
                count++;

                if(count === collection.length)
                {
                    resolve();
                }
            });
        });
    };

    Array.prototype._forEach = Array.prototype.forEach;
    
    if(options.monkeyPatch)
    {
        Array.prototype.forEach = forEach;
    }

    return forEach;
};

module.exports = awaitForEach;