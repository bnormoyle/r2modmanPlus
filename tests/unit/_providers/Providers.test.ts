import 'mocha';
import { assert } from 'chai';
import ProfileProvider from '../../../src/providers/ror2/model_implementation/ProfileProvider';
import ProfileImpl from '../../../src/r2mm/model_implementation/ProfileImpl';
import LogOutputProvider from '../../../src/providers/ror2/data/LogOutputProvider';
import LogOutput from '../../../src/r2mm/data/LogOutput';
import ThunderstoreDownloaderProvider from '../../../src/providers/ror2/downloading/ThunderstoreDownloaderProvider';
import BetterThunderstoreDownloader from '../../../src/r2mm/downloading/BetterThunderstoreDownloader';

describe('Providers', () => {

    context("ProfileProvider", async () => {

        it("Not provided", () => {
            assert.throws(() => {
                ProfileProvider.instance;
            })
        });

        it("Provided", () => {
            ProfileProvider.provide(() => new ProfileImpl());
            assert.doesNotThrow(() => {
                ProfileProvider.instance;
            });
        });

    });

    context("LogOutputProvider", async () => {

        it("Not provided", () => {
            assert.throws(() => {
                LogOutputProvider.instance;
            })
        });

        it("Provided", () => {
            LogOutputProvider.provide(() => LogOutput.getSingleton());
            assert.doesNotThrow(() => {
                LogOutputProvider.instance;
            }, new RegExp("has not been provided"));
        });

    });

    context("ThunderstoreDownloaderProvider", async () => {

        it("Not provided", () => {
            assert.throws(() => {
                ThunderstoreDownloaderProvider.instance;
            })
        });

        it("Provided", () => {
            ThunderstoreDownloaderProvider.provide(() => new BetterThunderstoreDownloader());
            assert.doesNotThrow(() => {
                ThunderstoreDownloaderProvider.instance;
            });
        });

    });

});
