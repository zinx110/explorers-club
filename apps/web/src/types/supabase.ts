/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/game_instances": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.game_instances.id"];
          game_id?: parameters["rowFilter.game_instances.game_id"];
          party_id?: parameters["rowFilter.game_instances.party_id"];
          created_at?: parameters["rowFilter.game_instances.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["game_instances"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** game_instances */
          game_instances?: definitions["game_instances"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.game_instances.id"];
          game_id?: parameters["rowFilter.game_instances.game_id"];
          party_id?: parameters["rowFilter.game_instances.party_id"];
          created_at?: parameters["rowFilter.game_instances.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.game_instances.id"];
          game_id?: parameters["rowFilter.game_instances.game_id"];
          party_id?: parameters["rowFilter.game_instances.party_id"];
          created_at?: parameters["rowFilter.game_instances.created_at"];
        };
        body: {
          /** game_instances */
          game_instances?: definitions["game_instances"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/games": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.games.id"];
          name?: parameters["rowFilter.games.name"];
          /** Markdown description of the game. */
          description?: parameters["rowFilter.games.description"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["games"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** games */
          games?: definitions["games"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.games.id"];
          name?: parameters["rowFilter.games.name"];
          /** Markdown description of the game. */
          description?: parameters["rowFilter.games.description"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.games.id"];
          name?: parameters["rowFilter.games.name"];
          /** Markdown description of the game. */
          description?: parameters["rowFilter.games.description"];
        };
        body: {
          /** games */
          games?: definitions["games"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_id?: parameters["rowFilter.profiles.user_id"];
          name?: parameters["rowFilter.profiles.name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_id?: parameters["rowFilter.profiles.user_id"];
          name?: parameters["rowFilter.profiles.name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          user_id?: parameters["rowFilter.profiles.user_id"];
          name?: parameters["rowFilter.profiles.name"];
          created_at?: parameters["rowFilter.profiles.created_at"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/parties": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.parties.id"];
          code?: parameters["rowFilter.parties.code"];
          created_at?: parameters["rowFilter.parties.created_at"];
          is_public?: parameters["rowFilter.parties.is_public"];
          user_id?: parameters["rowFilter.parties.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["parties"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** parties */
          parties?: definitions["parties"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.parties.id"];
          code?: parameters["rowFilter.parties.code"];
          created_at?: parameters["rowFilter.parties.created_at"];
          is_public?: parameters["rowFilter.parties.is_public"];
          user_id?: parameters["rowFilter.parties.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.parties.id"];
          code?: parameters["rowFilter.parties.code"];
          created_at?: parameters["rowFilter.parties.created_at"];
          is_public?: parameters["rowFilter.parties.is_public"];
          user_id?: parameters["rowFilter.parties.user_id"];
        };
        body: {
          /** parties */
          parties?: definitions["parties"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  game_instances: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default gen_random_uuid()
     */
    id: string;
    /**
     * Format: character varying
     * @description Note:
     * This is a Foreign Key to `games.id`.<fk table='games' column='id'/>
     */
    game_id: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `parties.id`.<fk table='parties' column='id'/>
     */
    party_id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
  };
  games: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    name: string;
    /**
     * Format: text
     * @description Markdown description of the game.
     */
    description: string;
  };
  /** @description Public information about a user. */
  profiles: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: uuid */
    user_id: string;
    /** Format: character varying */
    name: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
  };
  parties: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default gen_random_uuid()
     */
    id: string;
    /** Format: character varying */
    code: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: boolean
     * @default true
     */
    is_public: boolean;
    /** Format: uuid */
    user_id: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description game_instances */
  "body.game_instances": definitions["game_instances"];
  /** Format: uuid */
  "rowFilter.game_instances.id": string;
  /** Format: character varying */
  "rowFilter.game_instances.game_id": string;
  /** Format: uuid */
  "rowFilter.game_instances.party_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.game_instances.created_at": string;
  /** @description games */
  "body.games": definitions["games"];
  /** Format: character varying */
  "rowFilter.games.id": string;
  /** Format: character varying */
  "rowFilter.games.name": string;
  /**
   * Format: text
   * @description Markdown description of the game.
   */
  "rowFilter.games.description": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: bigint */
  "rowFilter.profiles.id": string;
  /** Format: uuid */
  "rowFilter.profiles.user_id": string;
  /** Format: character varying */
  "rowFilter.profiles.name": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.created_at": string;
  /** @description parties */
  "body.parties": definitions["parties"];
  /** Format: uuid */
  "rowFilter.parties.id": string;
  /** Format: character varying */
  "rowFilter.parties.code": string;
  /** Format: timestamp with time zone */
  "rowFilter.parties.created_at": string;
  /** Format: boolean */
  "rowFilter.parties.is_public": string;
  /** Format: uuid */
  "rowFilter.parties.user_id": string;
}

export interface operations {}

export interface external {}