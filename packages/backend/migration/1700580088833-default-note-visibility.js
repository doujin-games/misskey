/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class DefaultNoteVisibility1700580088833 {
    name = 'DefaultNoteVisibility1700580088833'

    async up(queryRunner) {
        const registryItems = await queryRunner.query(`SELECT "id" FROM "registry_item" WHERE "scope" = $1 AND "key" = $2 AND "value" = $3`, ['{client,base}', 'defaultNoteVisibility', '"public"']);
        registryItems.forEach(async (item) => {
            await queryRunner.query(`UPDATE "registry_item" SET "value" = $1, "updatedAt" = $2 WHERE "id" = $3`, ['"home"', new Date(), item.id]);
        });
    }

    async down(queryRunner) {
        //
    }
}
